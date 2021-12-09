import React from 'react';

import './UserForm.css';

const UserForm = ({ setOpenModal, addUser}) => {
    const [userValue, setUserValue] = React.useState('')

    const onChangeInputValue = (event) => {
		setUserValue(event.target.value)
	}

	const onSubmitUser = (event) => {
		event.preventDefault()
		console.log(`Hola ${userValue}`)
		if (userValue.length > 0) {
			addUser(userValue)
			setOpenModal(false)
		}
	}

    return (
        <form className='UserForm' onSubmit={onSubmitUser}>
			<h2>
				¡Hola! <br /> Bienvenido a ToDo App
			</h2>
			<p>Organiza tus tareas del día a día</p>
			<label>Empecemos con tu nombre!</label>
			<input
				type='text'
				placeholder='Tu nombre'
				maxLength='13'
				value={userValue}
				onChange={onChangeInputValue}
			/>
			<button className='UserForm__button' type='submit'>
				¡A por ello!
			</button>
		</form>
    );
}

export { UserForm };