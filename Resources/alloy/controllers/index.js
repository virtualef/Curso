function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.index.activity.onCreateOptionsMenu = function(e) {
        var __alloyId4 = {
            title: "Uno",
            id: "__alloyId3"
        };
        $.__views.__alloyId3 = A$(e.menu.add(_.pick(__alloyId4, Alloy.Android.menuItemCreateArgs)), "MenuItem", e.menu);
        _.each(_.omit(__alloyId4, Alloy.Android.menuItemCreateArgs), function(v, k) {
            $.__views.__alloyId3[k] = v;
        });
    };
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;