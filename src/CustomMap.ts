import User from "./User";

interface Mappable {
    location: {
        latitude: number;
        longitude: number;
    }

}

export class CustomMap {
    private readonly googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addUserMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.latitude,
                lng: mappable.location.longitude
            }
        })
    }
}