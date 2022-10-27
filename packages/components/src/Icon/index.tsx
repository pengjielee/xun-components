import { Component } from 'react';
import * as React from 'react';
import classNames from 'classnames';
import Archer from 'archer-svgs';
import './style.scss';

export interface IIconProps {
    /**
     * 图标名称
     */
    type?: string;
    /**
     * 图标svg
     */
    svg?: string;
    /**
     * 样式
     */
    style?: React.CSSProperties;
    /**
     * 附加额外的 class
     */
    className?: string;
    /**
     * 附加id
     */
    id?: string;
}

const svgTarget = 'https://unpkg.com/ionicons@4.4.2/dist/ionicons/svg/';
const archer = new Archer();

export interface IIconState {
    svgHtml: string;
}

class Icon extends Component<IIconProps, IIconState> {
    state = {
        svgHtml: '',
    };

    getSvg = async (type: string) => {
        return await archer.fetchSvg(`${svgTarget}${type}.svg`);
    };

    async componentDidMount() {
        if (!this.props.type) {
            return;
        }
        const svg = await this.getSvg(this.props.type);
        this.setState({
            svgHtml: svg,
        });
    }

    async componentWillReceiveProps(props: IIconProps) {
        if (!props.type) {
            return;
        }

        if (this.props.type !== props.type) {
            const svg = await this.getSvg(props.type);
            this.setState({
                svgHtml: svg,
            });
        }
    }

    render() {
        const { type, svg, className, style, ...otherProps } = this.props;
        const preCls = 'panda-icon';
        const clsName = classNames(preCls, className, { [`${preCls}-${type}`]: !!type });
        return (
            <i
                className={clsName}
                style={style}
                dangerouslySetInnerHTML={{ __html: this.props.svg || this.state.svgHtml }}
                {...otherProps}
            />
        );
    }
}

export default Icon;
