import React, { Component } from 'react';
import TitleBar from '../components/TitleBar';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import { fetchContact } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Contact extends Component {
    componentWillMount() {
        this.props.fetchContact();
    }

    render() {

        if (this.props.contact) {
            const contact = this.props.contact;
            return (
                <div className="container pushdown">
                    <TitleBar title="Let's talk!" />
                    <div className="row ">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-4 pushdown">
                            <ContactForm action="https://formspree.io/salihzain35@gmail.com" />
                        </div>
                        <FAQ faq={contact.faq} faqButtons={contact.faqButtons} />
                        <div className="col-md-2"></div>
                    </div>
                </div>
            )
        }
        return <div></div>
    }




}


function mapStateToProps({ contact }) {
    return contact;
}

export default withRouter(connect(mapStateToProps, { fetchContact })(Contact)); 