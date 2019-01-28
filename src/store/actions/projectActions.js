export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Richy',
            authorLastName: 'Pea',
            authorId: 12,
            createdAt: new Date()
        }).then(
            () => {
                dispatch({
                    type: 'CREATE_PROJECT',
                    project
                });
            }
        ).catch(
            (err) => {
                dispatch({
                    type: 'CREATE_PROJECT_ERROR',
                    err
                })
            }
        )
    }
}
