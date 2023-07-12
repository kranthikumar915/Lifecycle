import React,  { Component } from 'react'
import  ReactDOM  from 'react-dom'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view:false
        }
        
    }
    //props inc
    countHandler () {
        ReactDOM.render(
            <React.StrictMode>
                <Counter num={this.props.num + 1}/>
            </React.StrictMode>,document.getElementById('renderHere')
        )
    }
    /* MOUNT METHODS */
    componentWillMount(){
        console.log(`depricated-component will mount called`)
    }
    componentDidMount(){
        console.log(`component did mount called`)
    }
    /* UPDATE STAGE */
    //@deprecated — 16.3, use static getDerivedStateFromProps instead; will stop working in React 17
    componentWillReceiveProps(nP){
        console.log(`depricated-component will update`)
        console.log('newprops=',nP)
        if(nP.num >=10){
            this.setState({
                view:true
            })
        }
    }
    shouldComponentUpdate(nP,nS){
        console.log(`should component update or not`)
        console.log(`newprops=`,nP)
        console.log(`newstate=`,nS)
        return true;
    }
    //@deprecated — 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17
   componentWillUpdate(nP,nS){
    console.log(`depricated-component will update`)
    console.log('newprops=',nP)
    console.log('newstate=',nS)

   }
    render() {
        console.log(`component rendered`)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h3 className='display-3 text-success'>counter</h3>
                    </div>
                </div>

                <div className="row">
                    <div className='col-md-12'>
                        <h1 className='text-center text-success' > Num = {this.props.num}</h1>
                        <div>
                            {
                                this.state.view ?
                                (<h1 className='text-center text-success'>welcome to react lifecycle</h1>) :
                                (
                                    <div>
                                        <h1 className='text-center text-warning'>need more counts</h1>
                                        <button onClick={()=>this.countHandler()} className='btn btn-dark'>increment props</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(oS,oP) {
        console.log(`component did update`)
        console.log('oldprops=',oP)
        console.log('oldstate=',oS)
    }
    //UNMOUNT
    componentWillUnmount(){
        console.log('component unmounted successfully')
    }
}
export default Counter