import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import {Button} from 'antd'
import {useNavigate} from 'react-router-dom'

export function BackButton() {
    const navigate = useNavigate()

    const goBack = (e) => {
        e.preventDefault();

        navigate(-1)
    }

  return (
    <Button
        type="dashed"
        shape="circle"
        icon={<ArrowLeftOutlined />}
        onClick={goBack}
    />
  )
}
