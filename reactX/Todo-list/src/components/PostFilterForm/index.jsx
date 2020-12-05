import React from "react";
import PropTypes from "prop-types";

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
};

function PostFilterForm(props) {
    const { onSubmit } = props;

    return <form onSubmit={}>
        <input type="text" placeholder="Search something"/>
    </form>
}

export default PostFilterForm;
