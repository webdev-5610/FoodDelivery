module.exports = function (app) {

    var multer = require('multer'); // npm install multer --save
    var upload = multer({dest: __dirname + '/../../public/images'});
    // fake data
    // var widgets = [
    //     {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    //     {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    //     {
    //         "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
    //
    //         "url": "http://lorempixel.com/400/200/"
    //     },
    //     {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    //     {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    //     {
    //         "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
    //
    //         "url": "https://youtu.be/AM2Ivdi9c4E"
    //     },
    //     {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    //
    // ];
    const widgetModel = require('../model/widget/widget.model.server');
    // api list
    app.post('/api/page/:pageId/widget', createWidget);
    app.get('/api/page/:pageId/widget', findWidgetsByPage);
    app.get('/api/page/:pageId/widget/:widgetId', findWidgetById);
    app.put('/api/page/:pageId/widget/:widgetId', updateWidget);
    app.delete('/api/page/:pageId/widget/:widgetId', deleteWidget);
    // route of reordering the widgets
    app.put('/api/page/:pageId/widget', sortWidget);  // '/page/:pageId/widget?initial=index1&final=index2'
    // route of upload the image
    app.post('/api/upload/', upload.single('imageAdded'), uploadImage);  // the upload.single has to include the name of file uploading element in html
    app.get('/images/:fileName', getImage);
    app.get('/api/widget/all', findAllWidgets);     // only for testing

    // function list
    function findAllWidgets(req, res) {
        widgetModel.find().exec(
            function (err, widgets) {
                if (err) {
                    return res.status(400).send(err);
                }
                return res.json(widgets);
            }
        );
    }

    function createWidget(req, res) {
        const widget = req.body;
        const pageId = req.params['pageId'];
        widget._page = pageId;
        delete widget._id;
        widgetModel.createWidget(pageId, widget)
            .then(function (widget) {
                    // console.log(widget);
                    res.status(200).send(widget);
                    return widget;  // must return widget here, in order to prevent further asynchronous calls.
                },
                function (err) {
                    console.log('create widget error! ' + err);
                    res.sendStatus(400);
                    return err;

                });
    }

    function findWidgetsByPage(req, res) {
        const pageId = req.params['pageId'];
        widgetModel.findAllWidgetsForPage(pageId)
            .then(function (widgets) {
                return res.status(200).send(widgets);
            })

    }

    function findWidgetById(req, res) {
        const widgetId = req.params['widgetId'];
        widgetModel.findWidgetById(widgetId).exec(
            function (err, widget) {
                if (err) {
                    return res.status(400).send(err);
                }
                if (widget == null) {
                    return res.sendStatus(404);
                }
                return res.status(200).send(widget);
            }
        );

    }

    function updateWidget(req, res) {
        const widgetId = req.params['widgetId'];
        const pageId = req.params['pageId'];
        let widget = req.body;

        widgetModel.updateWidget(widgetId, widget).then(
            function (widget, err) {
                if (err) {
                    console.log('-----');
                    console.log(err);
                    return res.status(400).send(err);
                }
                return res.status(200).send(widget);
            }
        );
    }

    function deleteWidget(req, res) {
        const widgetId = req.params['widgetId'];
        const pageId = req.params['pageId'];
        widgetModel.deleteWidget(pageId, widgetId).exec(
            function (err, widget) {
                if (err) {
                    return res.status(400).send(err);
                } else {
                    return res.status(200).send(widget);
                }

            }
        );
    }

    function sortWidget(req, res) {
        const pageId = req.params['pageId'];
        const startIndex = req.query.initial;
        const endIndex = req.query.final;
        widgetModel.reorderWidget(pageId, startIndex, endIndex);
        return res.status(200).send({});
    }

    function uploadImage(req, res) {
        console.log("backend upload image called.");
        // extract attributes of req.body
        const widgetId = req.body.widgetId;
        const width = req.body.width;
        const userId = req.body.userId;
        const websiteId = req.body.websiteId;
        const pageId = req.body.pageId;

        // extract attributes from req.file
        const myFile = req.file;
        console.log(myFile);
        if (myFile == null) {
            return;
        }
        const originalname = myFile.originalname; // file name on user's computer
        const filename = myFile.filename; // new file name in upload folder
        const path = myFile.path; // full path of uploaded file
        console.log("image path is: " + path);
        const destination = myFile.destination; // folder where file is saved to
        console.log("image destination is: " + destination);

        const size = myFile.size;
        const mimetype = myFile.mimetype;

        // set the image new url to this image widget
        var alteredWidget = {};
        widgetModel.findWidgetById(widgetId).exec(
            function (err, widget) {
                if (err) {
                    return res.status(400).send(err);
                }
                if (widget == null) {
                    return res.sendStatus(404);
                }
                alteredWidget = widget;
                console.log('altered widget is ' + alteredWidget);
            }
        );

        alteredWidget.url = app.settings.baseUrl + '/images/' + filename;
        // widget.url = 'images/'+filename;
        console.log("widget url is " + alteredWidget.url);

        // update the widget
        widgetModel.updateWidget(widgetId, alteredWidget).then(
            function (widget, err) {
                if (err) {
                    console.log('-----');
                    console.log(err);
                }
            }
        );
        const callbackUrl = app.settings.baseUrl + "/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;
        //console.log(app.settings.baseUrl);
        res.redirect(callbackUrl);

    }

    function getImage(req, res) {
        const fileName = req.params['fileName'];
        const localpath = __dirname + '/../../public/images/' + fileName;
        const path = require('path');
        res.sendFile(path.resolve(localpath));
    }
};

