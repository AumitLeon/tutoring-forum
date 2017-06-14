//Inline styles
//style.js

const style = {
  commentHeader: {
    height: '200px',
    background: '#74e3ec', /* Old Browsers */
    background: '-webkit-linear-gradient(top,#74e3ec,#c7ffe2)', /*Safari 5.1-6*/
    background: '-o-linear-gradient(top,#74e3ec,#c7ffe2)', /*Opera 11.1-12*/
    background: '-moz-linear-gradient(top,#74e3ec,#c7ffe2)', /*Fx 3.6-15*/
    background: 'linear-gradient(to bottom, #74e3ec, #c7ffe2)' /*Standard*/
  },
  commentBox: {
    width:'80vw',
    margin:'0 auto',
    fontFamily: '"Bitter", serif',
    //fontFamily:'Helvetica, sans-serif'
    //background:'linear-gradient(to bottom, #74e3ec, #c7ffe2)'
    
  },
  title: {
    //fontFamily: '"Bitter", serif',
    fontFamily: '"Quicksand", sans-serif',
    textAlign:'center',
    textTransform:'uppercase',
    background: 'linear-gradient(to right, #a7cfdf 0%, #23538a 100%)',
    webkitTextFillColor: 'transparent',
    webkitBackgroundClip: 'text',
    fontSize: '50px'
  },
  commentList: {
    border:'1px solid #f1f1f1',
    padding:'0 12px',
    maxHeight:'70vh',
    overflow:'scroll'
  },
  comment: {
    backgroundColor:'#fafafa',
    margin:'10px',
    padding:'3px 10px',
    fontSize:'.85rem'
  },
  commentForm: {
    margin:'10px',
    display:'flex',
    flexFlow:'row wrap',
    justifyContent:'space-between'
  },
  commentFormAuthor: {
    minWidth:'150px',
    margin:'3px',
    padding:'0 10px',
    borderRadius:'3px',
    height:'40px',
    flex:'2'
  },
  commentFormText: {
    flex:'4',
    minWidth:'400px',
    margin:'3px',
    padding:'0 10px',
    height:'40px',
    borderRadius:'3px'
  },
  commentFormPost: {
    minWidth:'75px',
    flex:'1',
    height:'40px',
    margin:'5px 3px',
    fontSize:'1rem',
    backgroundColor:'#A3CDFD',
    borderRadius:'3px',
    color:'#fff',
    textTransform:'uppercase',
    letterSpacing:'.055rem',
    border:'none'
  },
  updateLink: {
    textDecoration:'none',
    paddingRight:'15px',
    fontSize:'.7rem'
  },
  deleteLink: {
    textDecoration:'none',
    paddingRight:'15px',
    fontSize:'.7rem',
    color:'red'
  },
  formStyle: {
    marginTop: '2%',
    marginBottom: '10%',
    marginRight: '15%',
    marginLeft: '15%',
    fontFamily: '"Bitter", serif',
  },
  questStyle: {
    marginTop: '2%',
    marginBottom: '2%',
    marginRight: '15%',
    marginLeft: '15%',
    fontFamily: '"Bitter", serif',
  },
  updatePostLink: {
    textDecoration:'none',
    paddingRight:'15px',
  },
  deletePostLink: {
    textDecoration:'none',
    paddingRight:'15px',
    color:'red'
  },
}
  


module.exports = style;