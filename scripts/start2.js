/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
//because Mash-up takes view from localhost:4848/start2/start2.index

var config = {
    host: 'localhost',
    prefix: '/',
    port: '4848',
    isSecure: false
};
require.config( { //to take resources from QlikSense Desktop app source
    baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) { //taken from QlikSense Desktop app source
    console.log(config);
    console.log(qlik);

    qlik.setOnError( function ( error ) {
        $( '#popupText' ).append( error.message + "<br>" );
        $( '#popup' ).fadeIn( 1000 );
    } );
    $( "#closePopup" ).click( function () {
        $( '#popup' ).hide();
    } );

    //callbacks -- inserted here --
    //open apps -- inserted here --
    var app = qlik.openApp('Consumer Sales.qvf', config); // it's a source of charts from Mash-up app

    var app1 = qlik.openApp('Sales Discovery.qvf', config); // it's a source of charts from Mash-up app

    //get objects -- inserted here --

    app1.getObject('QV06','xvZYRNK');

    app1.getObject('QV04','CQgDDy');

    app.getObject('CurrentSelections','CurrentSelections');

    app.getObject('QV03','akDGX');
    app.getObject('QV02','JcJvj');

    //create cubes and lists -- inserted here --

} );
