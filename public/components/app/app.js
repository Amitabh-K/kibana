import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

import { Expression } from '../expression';
import { Sidebar } from '../sidebar';
import { Render } from '../render';

export function App({ renderable }) {
  function done() {
    console.log('rendered!');
  }

  return (
    <div>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Expression />
          </Col>
        </Row>
        <Row>
          <Col md={3} smHidden xsHidden>
            <Sidebar />
          </Col>
          <Col md={9} xs={12}>
            <Render expressionOutput={renderable} done={done}/>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

App.propTypes = {
  expression: PropTypes.string,
  renderable: PropTypes.object,
  expressionSet: PropTypes.func,
  expressionRun: PropTypes.func,
};
