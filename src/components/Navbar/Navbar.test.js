import { mount } from "enzyme"
import Navbar from "./Navbar";

describe('navbar', () => {
    let wrapper = mount(<Navbar logo='logo' title='title' rightItems={['Project', 'About', 'Contact']}/>);

    it('should contain navbar--left', () => {
        expect(wrapper.find('.navbar--left')).toHaveLength(1);
    });

    it('should contain navbar--right', () => {
        expect(wrapper.find('.navbar--right')).toHaveLength(1);
    });

    it('should contain display Logo props in navbar left', () => {
        expect(wrapper.props().logo).toBe('logo');
    });

    it('should contain display Title props in navbar left', () => {
        expect(wrapper.props().title).toBe('title');
    });

    it('should display item list in navbar--right', () => {
        expect(wrapper.props().rightItems).toStrictEqual(['Project', 'About', 'Contact']);
    });
})