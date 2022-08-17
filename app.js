class Aside extends React.Component {
    render(){
        return (
        <aside>
            <nav>
                <a>Dashboard</a>
                <a> Widget</a>
                <a> Reviews</a>
                <a> Customers</a>
                <a> Online Analysis</a>
                <a> Setting</a>
            </nav>

        </aside>
        )
    }
}

//used to recyle componets

class Reviews extends React.Component{
    render () {
        return <section>Reviews</section>  
    }
}

class AvgRating extends React.Component {
    render(){
        return <section>Average Rating</section>
    }
}

class Sentiment extends React.Component {
    render(){
        return <section>Sentiment Analysis</section>
    }
}

class WebVistors extends React.Component {
    render(){
        return (
            <section id='large'>
                Website Visitors
                <div>821</div>

            </section>
        )
    }
}


class App extends React.Component{
    render () {
        return(
            <div id='app'>
                <Aside />
                <div id='container'>
                    <div id='top'>
                        <Reviews />
                        <AvgRating />
                        <Sentiment />
                    </div>
                    <WebVistors />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('main')
  );


