import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from 'semantic-ui-react';

function ActionBar(props) {
  return (
    <Grid style={{ marginTop: '3rem' }}>
      <Grid.Row centered>
        <Grid.Column width={4}>
          <Button.Group style={{ width: '90%', margin: 'auto', height: '3.2rem' }}>
            { (props.previous) ? <Button
              labelPosition="left"
              icon="left chevron"
              content="Previous"
              onClick={props.getPrev}
            /> : null
            }
            { (props.next) ? <Button
              color="teal"
              onClick={props.getNext}
              labelPosition="right"
              icon="right chevron"
              content="Next"
              primary
            /> : null
            }
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

ActionBar.propTypes = {
  getNext: PropTypes.func,
  getPrev: PropTypes.func,
  previous: PropTypes.bool,
  next: PropTypes.bool,
};

ActionBar.defaultProps = {
  previous: false,
  next: false,
  getNext: () => {},
  getPrev: () => {},
};

export default ActionBar;