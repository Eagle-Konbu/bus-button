import Image from "next/image";
import React from "react";

type Props = {
    isOn: boolean;
}

const BusButton = (props: Props) => {
    const [isOn, setIsOn] = React.useState(props.isOn);
    const imgSrc = (isOn: boolean) => isOn ? "/images/on.svg" : "/images/off.svg";

    return (
        <Image src={imgSrc(isOn)} alt="BusButton" width={300} height={300} onClick={() => setIsOn(!isOn)} />
    );
};

export default BusButton;