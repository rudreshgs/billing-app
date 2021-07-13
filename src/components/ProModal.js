import React from 'react'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import ProEditForm from './ProEditForm'

const ProModal = (props) => {
 const { className, modal, toggle, editData} = props

    return(
        <div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Edit Product Details</ModalHeader>
                <ModalBody>
                    <ProEditForm editData={editData} toggle={toggle} />
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ProModal