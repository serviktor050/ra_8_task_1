import React from "react";
import { useState, useEffect } from "react";
import ListItems from "./ListItems.jsx";
import Details from "./Details";

const DEFAULT_INFO = {
  id: "",
  name: "",
  avatar: "",
  details: {
    city: "",
    company: "",
    position: "",
  },
};

const url =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/";

export default function List() {
  const [list, setList] = useState([]);
  const [info, setInfo] = useState(DEFAULT_INFO);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        setLoading(true);
        setError(null);
        fetch(`${url}users.json`)
          .then((response) => response.json())
          .then((data) => {
            setList(data);
            setLoading(false);
          });
      } catch {
        setLoading(false);
        setError("Ошибка загрузки");
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, []);

  function onClick(id) {
    setList((prev) =>
      prev.map((itemList) => {
        let active = false;
        if (id === itemList.id) {
          active = true;
        }
        return {
          id: itemList.id,
          name: itemList.name,
          active: active,
        };
      })
    );

    if (info.id !== "") {
      if (id !== info.id) {
        fetch(`${url}${id}.json`)
          .then((response) => response.json())
          .then((data) => {
            setInfo(data);
          });
      }
    } else {
      fetch(`${url}${id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setInfo(data);
        });
    }
  }

  return (
    <>
      <div className="list">
        {error}
        {loading && "Идет загрузка..."}
        <ListItems list={list} onClick={onClick} />
      </div>
      <div className="details">{info.id && <Details info={info} />}</div>
    </>
  );
}
