import React, {Component} from 'react';
import {
    Popover, Modal, Badge, Icon, Input,Tooltip,message
} from 'antd';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {NavLink, Switch, Route, Redirect, withRouter} from 'react-router-dom';



const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, finalProps)
    );
};

const PropsRoute = ({component, ...rest}) => {
    return (
        <Route {...rest} render={routeProps => {
            return renderMergedProps(component, routeProps, rest);
        }}/>
    );
};

@inject('rootStore')
@observer
class Main extends Component {

    componentWillMount() {
        // const winWidth = document.documentElement.clientWidth;
        // const winHeight = document.documentElement.clientHeight;
        // this.props.rootStore.treeStore.updateWinSize({width: winWidth, height: winHeight});
        // this.winResize = (e) => {
        //     this.props.rootStore.treeStore.updateWinSize({
        //         width: document.documentElement.clientWidth,
        //         height: document.documentElement.clientHeight,
        //     });
        // };
        // window.addEventListener('resize', this.winResize, false);

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.winResize, false);
    }

    componentDidMount() {

    }

    render() {

        // 已登录
        //console.log( this.props.rootStore.treeStore.menuTreeData.filter(d=>d));
        return (
            <div id="mainBox">
                sdsdsdsd
            </div>
        );
    }
}

export default withRouter(Main);


