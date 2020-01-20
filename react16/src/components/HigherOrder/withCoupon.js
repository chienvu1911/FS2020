import React from 'react';

const withCoupon = (WrappedComponent) => {
    class NewComponent extends React.Component {
        render() {
            return(
                <WrappedComponent
                    {...this.props}
                    useCoupon={true} />
            )
        }
    }

    return NewComponent;
}

export default withCoupon;