<script src="https://maps.googleapis.com/maps/api/js?key=SUA_CHAVE_AQUI&callback=initMap" async defer></script>
<script>
    var lat;
    var lon;
    function getLocation() {
        if(!navigator.geolocation){
            return null;
        }
        navigator.geolocation.getCurrentPosition(function(pos){
            lat = pos.coords.latitude;
            lon = pos.coords.longitude;
            initMap();
        })
    }
    function initMap() {
        const nossaLocalizacao = {lat:lat,lng:lon};
        map = new google.maps.Map(document.getElementById("map"),{
            zoom:15,
            center: nossaLocalizacao,
        });
        
        const marker = new google.maps.Marker({
            position:nossaLocalizacao,
            map: map,
        });
    }
    getLocation();
</script>
