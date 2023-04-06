import React from 'react';
import { ElementTree } from '../Components'

import {
    FrownFilled,
    SmileOutlined,
} from '@ant-design/icons';

let task = [
    "Используя стороннее API, реализовать SPA приложение React, состоящее из двух страниц.",
    "Oтобразить карточки персонажей, добавить возможность пагинации.",
    "Реализовать страницу с подробной информацией по выбранному персонажу.",
    "Плюсы:",
    "+ Аккуратная верстка",
    "+ Использование UI фреймворка (Material, Ant, Bootstrap и т.п.)",
    "В качестве дополнительного задания:",
    "+ Для работы с данными использовать хранилище (Vuex, Redux и т.п.)",
    "+ Редактировать информацию о персонаже локально, без отправки на сервер",]

const convertTreeText = task.map((text, i, arr) => {
    return ({
        title: text,
        key: `0-${i}`,
        icon: ({ selected }) => (selected ? <FrownFilled /> : <SmileOutlined />),
    });
})

export function Main() {
    return (
        <div>
            <ElementTree treeData={convertTreeText} />
        </div>
    )
}
