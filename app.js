

var loadMap = function () {

    var map = new Microsoft.Maps.Map(document.querySelector("#map"), {
        credentials: 'AuQ2kqDNtkNtNd0FU1nPWQFPBo14nJiZ3VkaukVwnzB9DGy6lCrfSSX6cHAEjxHE',
    });

    Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function(){
        Microsoft.Maps.Polygon.prototype.toString = function () {
            var _json = Microsoft.Maps.GeoJson.write(this);
            return JSON.stringify(_json);
        }
    })

Microsoft.Maps.loadModule('Microsoft.Maps.WellKnownText', function(){
    Microsoft.Maps.Polygon.prototype.toWKT = function () {
        var wkt = Microsoft.Maps.WellKnownText.write(this);
        return wkt;
    }
})

    Microsoft.Maps.loadModule('Microsoft.Maps.DrawingTools', function () {
        var tools = new Microsoft.Maps.DrawingTools(map);

        tools.showDrawingManager(function (manager) {
             drawingManager = manager;

            Microsoft.Maps.Events.addHandler(drawingManager, 'drawingEnded', function (geom) {
                console.log(geom.toString());
                console.log(geom.toWKT());
                geometry.toString();
            });
        });
    });
}