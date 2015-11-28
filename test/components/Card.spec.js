import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Card from '../../app/components/Card';

function setup(propOverrides) {
  const props = Object.assign({
      index: 0,
      price: "$100,000",
      agency: {
        brandingColors: {
          primary: "#000"
        },
        logo : "logo.png"
      },
      mainImage: "img.png",
      buttonText: "Add Property"
  }, propOverrides);

  const output = TestUtils.renderIntoDocument(<Card {...props} />);

  return {
    props: props,
    output: output
  }
}

describe('Components', () => {
  it('should have default non hover state', () => {
    const { output } = setup();
    expect(output.state).toEqual({
      isHover: false
    });
  });

  it('should change state on hover', () => {
    const { output } = setup();

    TestUtils.Simulate.mouseOver(ReactDOM.findDOMNode(output));
    
    expect(output.state).toEqual({
      isHover: true
    });


  })
});
