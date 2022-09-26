import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ICoords, IInfoIp } from "../types";
import { TileLayer, Popup, CircleMarker, MapContainer, useMap } from 'react-leaflet';
import Policy from "../../common/policy";
import Logo from "../../../images/LocationLogo.svg";
import InputInfo from "./input-info";
import classNames from "classnames";
import "./index.css";

const GetLocation = () => {
    const [policy, setPolicy] = useState<boolean>(false);
    const [info, setInfo] = useState<IInfoIp>();
    const address = useRef<HTMLInputElement | null>(null);

    const onChangePolicy = (e: React.ChangeEvent<HTMLInputElement>) => {
        let checked = e.target.checked;

        if (checked) {
            setPolicy(checked);
            e.target.disabled = true;
        }
    }

    const onClickClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (address.current) {
            address.current.value = "";

            if (info)
                setInfo(undefined);
        }
    }

    const onClickGetMyIp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const res = (await axios.get('https://ipapi.co/json')).data as IInfoIp;

        if (address.current)
            address.current.value = res.ip;
    }

    const onClickGetGeolocation = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (address.current) {
            const res = (await axios.get('https://ipapi.co/' + address.current.value + '/json')).data as IInfoIp;

            setInfo(res);
        }
    }

    const onChangeIP = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target;

        input.value = input.value.replace(/[^0-9.]/g, '');

    }

    const RecenterAutomatically = ({ lat, lng }: ICoords) => {
        const map = useMap();

        useEffect(() => {
            map.setView([lat, lng]);
        }, [lat, lng]);

        return null;
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
            {
                policy &&
                <>
                    <h3 className="enter-ip">Введіть IP-адресу</h3>
                    <div className="row justify-content-center mt-5">
                        <div className="col-6">
                            <div className="input-group">
                                <input
                                    ref={address}
                                    className={classNames("form-control border-end-0 input-ip-address px-4 py-2", info?.error && "text-danger")}
                                    type="text"
                                    maxLength={15}
                                    placeholder="IPv4"
                                    onChange={onChangeIP} />
                                <button className="btn border-start-0 input-ip-address input-clear bg-white px-4 py-2"
                                    onClick={onClickClear}>
                                    Очистити
                                </button>
                            </div>
                            <div className="row justify-content-center mt-4">
                                <button className="btn btn-location btn-get-my-ip py-3 px-5 me-4"
                                    onClick={onClickGetMyIp}>
                                    Дізнатися свій IP
                                </button>
                                <button className="btn btn-location btn-get-location py-3 px-5 ms-4"
                                    onClick={onClickGetGeolocation}>
                                    Дізнатися місцезнаходження
                                </button>
                            </div>
                        </div>
                    </div>
                    {
                        info && !info.error &&
                        <div className="row address gx-5">
                            <div className="col address-info">
                                <h4 className="text-center mb-4">
                                    Інформація про IP-адресу:
                                </h4>

                                <InputInfo
                                    label={"Постачальник інтернет-послуг(ISP)"}
                                    field={info.org} />

                                <InputInfo
                                    label={"Місто"}
                                    field={info.city} />

                                <InputInfo
                                    label={"Регіон"}
                                    field={info.region} />

                                <InputInfo
                                    label={"Код регіона"}
                                    field={info.region_code} />

                                <InputInfo
                                    label={"Країна"}
                                    field={info.country_code + " - " + info.country_name} />

                                <InputInfo
                                    label={"Домен верхнього рівня"}
                                    field={info.country_tld} />
                            </div>

                            <div className="position-sticky col" >
                                <MapContainer className="address-map" center={[info.latitude, info.longitude]} zoom={10}
                                    scrollWheelZoom={false}
                                    doubleClickZoom={false}
                                    closePopupOnClick={false}
                                    dragging={false}
                                    zoomControl={false}
                                    zoomSnap={false}
                                    zoomDelta={false}
                                    trackResize={false}
                                >
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    <CircleMarker center={[info.latitude, info.longitude]} pathOptions={{ color: "red", radius: "100" }}  >
                                        <Popup >
                                            Приблизне місце знаходження
                                        </Popup>
                                    </CircleMarker>
                                    <RecenterAutomatically lat={info.latitude} lng={info.longitude} />
                                </MapContainer>
                            </div>
                        </div>
                    }
                </>
            }
        </div>
    );
}
export default GetLocation;