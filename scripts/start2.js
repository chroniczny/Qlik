/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
    host: window.location.hostname,
    prefix: prefix,
    port: window.location.port,
    isSecure: window.location.protocol === "https:"
};
require.config( {
    baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik2"], function (qlik ) {
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
    var app = qlik.openApp('Consumer Sales.qvf', config);

    var app1 = qlik.openApp('Sales Discovery.qvf', config);

    //get objects -- inserted here --
    app1.getObject('QV06','xvZYRNK');
    app1.getObject('QV05','RmuRp');
    app1.getObject('QV04','CQgDDy');

    app.getObject('CurrentSelections','CurrentSelections');

    app.getObject('QV03','akDGX');
    app.getObject('QV02','JcJvj');
    app.getObject('QV01','gUJWPF');
    //create cubes and lists -- inserted here --

} );
