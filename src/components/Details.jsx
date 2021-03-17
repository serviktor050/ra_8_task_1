import React from "react";

export default function Details(props) {
  const { info } = props;
  return (
    <>
      <div className="detail-img">
        <img alt={info.name} src={info.avatar} />
      </div>
      <div className="detail-name">{info.name}</div>
      <div className="detail-city">{info.details.city}</div>
      <div className="detail-company">{info.details.company}</div>
      <div className="detail-position">{info.details.position}</div>
    </>
  );
}
