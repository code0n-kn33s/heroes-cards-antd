import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getHero, editHero, clearHero } from '../Actions';
import { Typography, Divider, Image, List } from 'antd';
import { Spinner } from '../Components';

const { Title, Paragraph } = Typography;

export function HeroCard({ heroInfo, fetchHero, onEditHero, clearData }) {
  const [v, setv] = useState(false)
  const { name } = useParams();

  useEffect(() => {
    heroInfo === null && fetchHero(name);

    return () => {
      clearData();
    }
  }, [])

  const onEdit = (keys) => data => {
    setv(!v, v)
    onEditHero(keys, data)
  }


  console.log('heroInfo', heroInfo)
  return (
    <div className="heroWrap" >
      {heroInfo ?
        <>
          <Title level={2}>{heroInfo.name}</Title>
          <Image
            width={200}
            src={heroInfo.image.url}
          />
          <Divider orientation="left" plain>
             <Title level={4}>
              First Appearance
             </Title>
          </Divider>
          <div data-attribute1="qwerty" data-attribute2="qwerty"></div>
          <Paragraph editable={{onChange: onEdit(["biography", "first-appearance"])}}>
            {heroInfo.biography["first-appearance"]}
          </Paragraph>
          <Divider orientation="left" plain>
             <Title level={4}>
              Connections
             </Title>
          </Divider>
          <Paragraph editable={{onChange: onEdit(["connections", "group-affiliation"])}}>
            {heroInfo.connections["group-affiliation"]}
          </Paragraph>
          <Divider orientation="left" plain/>

          <Paragraph>
            <List
              dataSource={[
                {text: heroInfo.work.base, type: ["work", "base"]},
                {text: heroInfo.work.occupation, type: ["work", "occupation"]},
              ]}
              renderItem={(item) => {
                return (
                <List.Item>
                  <Typography.Text mark>[{item.type.join(' ').toUpperCase()}]</Typography.Text>
                  <Typography.Text italic={true} editable={{onChange: onEdit(item.type)}}>{item.text}</Typography.Text>
                </List.Item>
              )}}
            />
          </Paragraph>
        </>
        : <Spinner />

      }
    </div>
  )
}

const stateFromProps = ({ hero_reducer }) => ({
  heroInfo: hero_reducer.hero_info
})

const dispatchFromProps = (dispatch) => ({
  fetchHero: (id) => dispatch(getHero(id)),
  onEditHero: (keys, data) => dispatch(editHero(keys, data)),
  clearData: () => dispatch(clearHero())
})

export const HeroesCard = connect(stateFromProps, dispatchFromProps)(HeroCard)
