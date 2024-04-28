import React, { useEffect } from 'react';

function ModalSave({ visible, onClose }) {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            console.log('modal visible!')
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    return (
        <div className={`modal ${visible ? 'show' : ''}`}>
            <div className="modal-content">
                <p>Texto Guardado</p>
            </div>
        </div>
    );
}

export default ModalSave;
