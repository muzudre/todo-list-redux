const styles = {
    taskContainer: {
        display: 'flex'
    },
    taskWrapper: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        marginBottom: 12,
        width: '-webkit-fill-available',
        borderRadius: 4,
        boxShadow: 'rgb(0 0 0 / 3%) 0px 10px 15px 15px'
    },
    task: {
        textDecoration: 'none',
        flexBasis: '75%',
        paddingLeft: 20,
        fontSize: 16,
        cursor: 'pointer'
    },
    iconsWrapper: {
        paddingTop: 15,
        cursor: 'pointer'
    },
    completedIcon: {
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 20,
        color: '#1ea176'
    },
    deletedIcon: {
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 20,
        color: '#e13536'
    }
}
export default styles