import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Error404 from '../components/__mocks__/Error404';
import '@testing-library/jest-dom'

//Code taken from https://blog.logrocket.com/testing-react-router-usenavigate-hook-react-testing-library/

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));

describe('Error404', () => {
    it('will match the snapshot when no props are passed.', () => {
        var component = render(
            <Error404 />
        );

        expect(component).toMatchSnapshot();
    });
    it('will render a loading page when the button is clicked.', () => {
        var component = render(
            <Error404 />
        );

        var btn = component.getByTestId('btn');
        var errorTitle = component.queryByTestId("error-title");
        fireEvent.click(btn);

        expect(errorTitle).not.toBeInTheDocument();
    });
});