import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
// compnents and helpers
import { URL } from '../../../config'
import { getData } from '../../../API/fetch'
import Button from '../Buttons/button'
import CardInfo from '../CardInfo/cardInfo'
//style 
import style from './newsList.css'

class NewsList extends Component {

  state = {
    items: [],
    teams: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      getData(`${URL}/teams`)
        .then(data => this.setState({
          teams: data
        }))
    }

    getData(`${URL}/articles?_start=${start}&_end=${end}`)
      .then(data => this.setState({
        items: [...this.state.items, ...data]
      }))
  }
  loadMore = () => {
    let end = this.state.end + this.state.amount
    this.request(this.state.end, end)
  }
  componentDidMount() {
    this.request(this.state.start, this.state.end)
  }

  renderNews = (type) => {
    let template = null;
    switch (type) {
      case 'card':
        template = this.state.items.map((item, i) => (
          <CSSTransition
            key={i}
            classNames={{
              enter: style.newsList_wrapper,
              enterActive: style.newsList_wrapper_active
            }}
            timeout={400}
          >
            <div >
              <div className={style.newsList_item}>
                <Link to={`/articles/${item.id}`}>
                  <CardInfo teams={this.state.teams} teamId={item.team} date={item.date} />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ))
        break;

      default:
        template = null
    }
    return template
  }

  render() {
    return (
      <div>
        <TransitionGroup
          className={style.newsList}
          component='div'
        >
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button
          type='loadmore'
          loadMore={this.loadMore}
          cta="Load More News"
        />
      </div >
    )
  }
};

export default NewsList;
