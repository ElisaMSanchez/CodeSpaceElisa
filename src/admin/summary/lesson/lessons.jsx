import './lessons.css';
import {useState} from 'react';
import AdminButton from '../../common/admin-button';
import handleOnChangeInput from '../../../common/form/change-handler';
import AdminButtonLabel from '../../common/admin-button-label';

function Lessons({display, lessons, onNewLesson, onLessonUpdated, onLessonDeleted}) {
    const emptyLesson = {
        createdAt: '',
        internalComment: '',
        externalComment: ''
    }

    const lessonsClassName = `lessons ${display ? 'visible' : 'hidden'}`;
    const [newLesson, setNewLesson] = useState(emptyLesson);
    const [updateLesson, setUpdateLesson] = useState(null);

    const handleChangeNewLesson = handleOnChangeInput(setNewLesson);
    const handleChangeUpdateLesson = handleOnChangeInput(setUpdateLesson);

    const handleSubmitNewLesson = (event) => {
        event.preventDefault();

        const newLessonWithId = {...newLesson, id: Math.random() * (1000 - 10000) + 1000}
        onNewLesson(newLessonWithId);
        setNewLesson(emptyLesson);
    }

    const handleSubmitUpdatedLesson = (event) => {
        event.preventDefault();

        onLessonUpdated(updateLesson);
        setUpdateLesson(null);
    }

    const handleUpdateLesson = (event, lessonToUpdate) => {
        event.preventDefault();

        setUpdateLesson({...lessonToUpdate})
    }

    const handleDeleteLesson = (event, lessonToDelete) => {
        event.preventDefault();
        onLessonDeleted(lessonToDelete);
    }

    return (
        <div className={lessonsClassName}>
            <div className='lessons-table-overlay'>
                <table className='lessons-table'>
                    <thead>
                    <tr className='lessons-table-tr head'>
                        <th className='lessons-table-th created-at'>
                            Fecha
                        </th>
                        <th className='lessons-table-th comments'>
                            Comentarios
                        </th>
                        <th className='lessons-table-th actions'>
                            Acciones
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        lessons.length > 0 ?
                            lessons.map(lesson =>
                                lesson.id === updateLesson?.id ?
                                    [
                                        displayLessonFormRow(updateLesson, handleChangeUpdateLesson, handleSubmitUpdatedLesson),
                                        displayLessonReadOnlyRow(lesson, true)
                                    ]
                                    : displayLessonReadOnlyRow(lesson, false)
                            )
                            :
                            displayNoLessonsRow()
                    }
                    {
                        displayLessonFormRow(newLesson, handleChangeNewLesson, handleSubmitNewLesson)
                    }
                    </tbody>
                </table>
            </div>
            {
                updateLesson ?
                    displayLessonForm(updateLesson, handleChangeUpdateLesson, handleSubmitUpdatedLesson)
                    : displayLessonForm(newLesson, handleChangeNewLesson, handleSubmitNewLesson)
            }
        </div>
    );

    function displayLessonReadOnlyRow(lesson, isUpdate) {
        const isUpdatedClass = isUpdate ? 'update' : '';
        return (
            <tr key={lesson.id} className={`lessons-table-tr body ${isUpdatedClass}`}>
                <td className='lessons-table-td created-at'>
                    {lesson.createdAt}
                </td>
                <td className='lessons-table-td comments'>
                    <p className='lessons-table-comment internal'>{lesson.internalComment}</p>
                </td>
                <td className='lessons-table-td actions'>
                    {
                        isUpdate ? <></> :
                            (
                                <div className='lessons-table-actions'>
                                    <AdminButton onClick={(event) => handleUpdateLesson(event, lesson)} extraClass='action update'>
                                        Lapiz
                                    </AdminButton>
                                    <AdminButton onClick={(event) => handleDeleteLesson(event, lesson)} extraClass='action delete'>
                                        Basura
                                    </AdminButton>
                                </div>
                            )
                    }
                </td>
            </tr>
        );
    }

    function displayLessonFormRow(lesson, handleChange, handleSubmit) {
        const key = `${lesson.id}-form` || 'new-lesson';

        return (
            <tr key={key} className='lessons-table-tr body lesson-form-row'>
                <td className='lessons-table-td created-at lesson-form-row'>
                    <input type='date' required={true} name='createdAt' className='lesson-form-item-input' onChange={handleChange} value={lesson.createdAt}/>
                </td>
                <td className='lessons-table-td comments lesson-form-row'>
                    <label className='lessons-table-label-comment'>Comentarios</label>
                    <textarea name='internalComment' className='lesson-form-item-input-comment' onChange={handleChange} value={lesson.internalComment}/>
                </td>
                <td className='lessons-table-td actions lesson-form-row'>
                    <div className='lessons-table-actions'>
                        <AdminButton onClick={handleSubmit} extraClass='action create'>
                            Boton +
                        </AdminButton>
                    </div>
                </td>
            </tr>
        );
    }

    function displayNoLessonsRow() {
        return (
            <tr className='lessons-table-tr body'>
                <td className='lessons-table-td' colSpan={3}>
                    Sin Clases
                </td>
            </tr>
        );
    }


    function displayLessonForm(lesson, handleChange, handleSubmit) {
        return (
            <div className='lesson-form'>
                <div className='lesson-form-item'>
                    <label className='lesson-form-item-label'>Fecha: </label>
                    <input type='date' required={true} name='createdAt' className='lesson-form-item-input-date' onChange={handleChange} value={lesson.createdAt || new Date().toISOString()}/>
                </div>
                <div className='lesson-form-item'>
                    <label className='lesson-form-item-label'>Comentario Privado: </label>
                    <textarea name='internalComment' className='lesson-form-item-input-comment' onChange={handleChange} value={lesson.internalComment}/>
                </div>

                <div className='lesson-form-item'>
                    <AdminButton onClick={handleSubmit} extraClass='lesson-form-item-button'>
                        <AdminButtonLabel label='Registrar Clase'/>
                    </AdminButton>
                </div>
            </div>
        );
    }
}

export default Lessons;