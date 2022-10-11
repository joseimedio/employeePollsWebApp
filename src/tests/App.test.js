import * as React from 'react';
import { render } from '@testing-library/react';
import App from '../components/__mocks__/App';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router';

let questions = {};

describe('App', () => {
    it('will match the snapshot when authedUser and questions are passed as props.', () => {
        var component = render(
            <MemoryRouter>
                <App 
                    authedUser={""}
                    questions={questions}
                />
            </MemoryRouter>
            
        );

        expect(component).toMatchSnapshot();
    });
    it('will paint loading page while authedUser is null.', () => {
        var component = render(
            <MemoryRouter>
                <App 
                    authedUser={null}
                    questions={questions}
                />
            </MemoryRouter>
            
        );

        var loadingPage = component.getByTestId('loading-page');
        expect(loadingPage).toBeInTheDocument();
    });
    it('will load target page if authedUser is a string.', () => {
        var component = render(
            <MemoryRouter>
                <App 
                    authedUser={""}
                    questions={questions}
                />
            </MemoryRouter>
            
        );

        var targetPage = component.getByTestId('target-page');
        expect(targetPage).toBeInTheDocument();
    });
});