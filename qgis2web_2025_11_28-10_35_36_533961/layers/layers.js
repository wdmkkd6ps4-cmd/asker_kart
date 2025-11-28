var wms_layers = [];


        var lyr_Grey_0 = new ol.layer.Tile({
            'title': 'Grey',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.maptiler.com/maps/dataviz/{z}/{x}/{y}.png?key=M6wiHNHMYIU8tD685oms'
            })
        });
var format_TilAskersentrummorgen_1 = new ol.format.GeoJSON();
var features_TilAskersentrummorgen_1 = format_TilAskersentrummorgen_1.readFeatures(json_TilAskersentrummorgen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TilAskersentrummorgen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TilAskersentrummorgen_1.addFeatures(features_TilAskersentrummorgen_1);
var lyr_TilAskersentrummorgen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TilAskersentrummorgen_1, 
                style: style_TilAskersentrummorgen_1,
                popuplayertitle: 'Til Asker sentrum morgen',
                interactive: true,
    title: 'Til Asker sentrum morgen<br />\
    <img src="styles/legend/TilAskersentrummorgen_1_0.png" /> Tog<br />\
    <img src="styles/legend/TilAskersentrummorgen_1_1.png" /> Bil<br />\
    <img src="styles/legend/TilAskersentrummorgen_1_2.png" /> Buss<br />\
    <img src="styles/legend/TilAskersentrummorgen_1_3.png" /> Sykkel<br />' });

lyr_Grey_0.setVisible(true);lyr_TilAskersentrummorgen_1.setVisible(true);
var layersList = [lyr_Grey_0,lyr_TilAskersentrummorgen_1];
lyr_TilAskersentrummorgen_1.set('fieldAliases', {'qc_id': 'qc_id', 'segment_id': 'segment_id', 'mode': 'mode', 'scenario': 'scenario', 'length': 'length', 'bredde': 'bredde', });
lyr_TilAskersentrummorgen_1.set('fieldImages', {'qc_id': '', 'segment_id': '', 'mode': '', 'scenario': '', 'length': '', 'bredde': '', });
lyr_TilAskersentrummorgen_1.set('fieldLabels', {'qc_id': 'no label', 'segment_id': 'no label', 'mode': 'no label', 'scenario': 'no label', 'length': 'no label', 'bredde': 'no label', });
lyr_TilAskersentrummorgen_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});