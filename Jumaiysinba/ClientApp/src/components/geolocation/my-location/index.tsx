import axios from "axios";
import formatcoords from "formatcoords";
import { useEffect, useState } from "react";
import { ICoords, IInfoGeo, IInfoIp } from "../types";
import { TileLayer, Popup, CircleMarker, MapContainer } from 'react-leaflet';
import Policy from "../../common/policy";
import Logo from "../../../images/LocationLogo.svg";
import "./index.css";

const GetLocation = () => {
    const [policy, setPolicy] = useState<boolean>(false);
    const [coords, setCoords] = useState<ICoords>();
    const [info, setInfo] = useState<IInfoIp>();

    const geolocationAPI = navigator.geolocation;
    useEffect(() => {
        if (geolocationAPI) {
            geolocationAPI.getCurrentPosition((position) => {
                const { coords } = position;
                const degree = formatcoords(coords.latitude, coords.longitude).format();
                setCoords({ lat: coords.latitude, lng: coords.longitude, inDegree: degree });
            });
        }
    }, [geolocationAPI]);

    const getData = async () => {
        // const res = (await axios.get('https://geolocation-db.com/159.39.13.245/json/')).data as IInfoGeo;
        const res = (await axios.get('https://ipapi.co/json')).data as IInfoIp;
        setInfo(res);
    }

    useEffect(() => {
        getData()
    }, []);

    const onChangePolicy = (e: React.ChangeEvent<HTMLInputElement>) => {
        let checked = e.target.checked;

        if (checked) {
            setPolicy(checked);
            e.target.disabled = true;
        }
    }

    return (
        <div className="location">
            <Policy onChangePolicy={onChangePolicy}
                header={"Отримайте свою IP-адресу та дізнайтесь своє місцезнаходження."}
                explain={
                    "Використовуйте цей онлайн-інструмент, щоб отримати свої IP-адресу та дізнатись своє місцезнаходження. " +
                    "Наші інструменти дозволяють вам знаходити координати та адресу у вашому місці розташування, " +
                    "перетворювати адреси та координати та ділитися місцеположеннями."
                }
                borderColor={"#FCC016"}
                logo={Logo}
                isLeft={false}
            />

            <h3 className="enter-ip">Введіть IP-адресу</h3>
            {/* {
                    coords ?
                        <>
                            <div style={{ height: "300px", width: "300px", backgroundColor: "green" }} >
                                <MapContainer center={[coords.lat, coords.lng]} zoom={13} scrollWheelZoom={false}  >
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    <CircleMarker center={[coords.lat, coords.lng]} pathOptions={{ color: "red", radius: "100" }}  >
                                        <Popup>
                                            Приблизне місце знаходження
                                        </Popup>
                                    </CircleMarker>
                                </MapContainer>
                            </div>
                            <a href={"https://www.google.com/maps/place/" + coords.inDegree + "/@" + coords.lat + "," + coords.lng + "," + "18z"} target="_blank">Відкрити у Google map</a>
                        </>
                        : <></>
                } */}
        </div>
    );
}
export default GetLocation