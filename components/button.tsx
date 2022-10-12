import Image from "next/image";
import React from "react";

type Props = {
    isOn: boolean;
    onClick?: () => void;
}

const BusButton = (props: Props) => {
    const imgSrc = (isOn: boolean) => isOn ? "/images/on.svg" : "/images/off.svg";

    return (
        <Image src={imgSrc(props.isOn)} alt="BusButton" width={300} height={300} onClick={props.onClick} />
    );
};

export default BusButton;