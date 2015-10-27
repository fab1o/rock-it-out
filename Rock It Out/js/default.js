// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());

            var tileContent = NotificationsExtensions.TileContent.TileContentFactory.createTileSquare310x310Text09();
            tileContent.textHeadingWrap.text = "Rocking It out!";

            // Create a notification for the Wide310x150 tile using one of the available templates for the size.
            var wide310x150Content = NotificationsExtensions.TileContent.TileContentFactory.createTileWide310x150Text03();
            wide310x150Content.textHeadingWrap.text = "Rocking It out!";

            // Create a notification for the Square150x150 tile using one of the available templates for the size.
            var square150x150Content = NotificationsExtensions.TileContent.TileContentFactory.createTileSquare150x150Text04();
            square150x150Content.textBodyWrap.text = "Rocking It out!";

            // Attach the Square150x150 template to the Wide310x150 template.
            wide310x150Content.square150x150Content = square150x150Content;

            // Attach the Wide310x150 template to the Square310x310 template.
            tileContent.wide310x150Content = wide310x150Content;

            // Send the notification to the application’s tile.
            Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileContent.createNotification());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();


function UpdateTile(status) {


    var tileContent = NotificationsExtensions.TileContent.TileContentFactory.createTileSquare310x310Text09();
    tileContent.textHeadingWrap.text = "Rockin It out!\n" + status;

    // Create a notification for the Wide310x150 tile using one of the available templates for the size.
    var wide310x150Content = NotificationsExtensions.TileContent.TileContentFactory.createTileWide310x150Text03();
    wide310x150Content.textHeadingWrap.text = "Rockin It out!" + status;

    // Create a notification for the Square150x150 tile using one of the available templates for the size.
    var square150x150Content = NotificationsExtensions.TileContent.TileContentFactory.createTileSquare150x150Text04();
    square150x150Content.textBodyWrap.text = "Rockin It out!" + status;

    // Attach the Square150x150 template to the Wide310x150 template.
    wide310x150Content.square150x150Content = square150x150Content;

    // Attach the Wide310x150 template to the Square310x310 template.
    tileContent.wide310x150Content = wide310x150Content;

    // Send the notification to the application’s tile.
    Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileContent.createNotification());
};
