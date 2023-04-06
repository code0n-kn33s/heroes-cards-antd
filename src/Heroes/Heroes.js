import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Divider, Row, Pagination } from 'antd';
import { getHeroes } from '../Actions';
import { Spinner, ElementCard } from '../Components'

export function ListHeroes({ fetchHeroes, listHeroes }) {
  const [pageConfig, setPageConfig] = useState({
    currentPage: 1,
    total: 1,
    maxItems: 3,
    heroes: []
  })

  const memoised = useCallback(() => {
    const maxItems = pageConfig.maxItems
    const currentPage = pageConfig.currentPage

    const large = maxItems * currentPage
    const less = (currentPage - 1) * maxItems - 1

    return listHeroes.filter((e, i) => (i < large && i > less))
  }, [listHeroes, pageConfig.maxItems, pageConfig.currentPage])

  useEffect(() => {
    if (listHeroes.length) {
      setPageConfig({
        ...pageConfig,
        heroes: memoised(),
        total: Math.ceil(listHeroes.length / pageConfig.maxItems),
      })
    } else {
      fetchHeroes()
    }
  }, [ listHeroes, pageConfig.currentPage, memoised, listHeroes ])

  const navigate = useNavigate()

  const cardClicked = (id, name) => e =>
    navigate(`${id}/${name}`)

  const paginationChange = (page) =>
    setPageConfig({...pageConfig, currentPage: page})

  return (
    <div className="heroes">
      <Divider orientation="left">Heroes</Divider>

      <Row gutter={16} className={"heroes-row"}>
        {
          pageConfig.heroes.length ?
            pageConfig.heroes.map(hero =>
              <Col
                key={hero.id}
                className="gutter-row"
                span={8}
                style={{ marginBottom: 20 }}
                onClick={cardClicked(hero.id, hero.name)}
              >
                <ElementCard
                  img={hero.image.url}
                  title={hero.name}
                  subtitle={hero.work.occupation}
                />
              </Col>


            ) : <Spinner />
        }

      </Row>

      <Pagination
        defaultCurrent={1}
        total={pageConfig.total}
        defaultPageSize={pageConfig.currentPage}
        onChange={paginationChange}
      />
    </div>
  )
}

const stateFromProps = ({ heroes_reducer }) => ({
  listHeroes: heroes_reducer.list_heroes
})

const dispatchFromProps = (dispatch) => ({
  fetchHeroes: () => dispatch(getHeroes())
})


export const Heroes = connect(stateFromProps, dispatchFromProps)(ListHeroes)