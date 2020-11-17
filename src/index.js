import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovelCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovelCard>
        <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:45PM" 
        commentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a sapien a nulla iaculis dapibus. Nam feugiat purus erat, sed pharetra erat suscipit eget." 
        avatar={faker.image.avatar()} />
      </ApprovelCard>
      <ApprovelCard>
        <CommentDetail 
        author="Jane" 
        timeAgo="Today at 2:00PM"  
        commentText="Ut tincidunt ultrices felis. Donec iaculis elit vitae imperdiet aliquam. Suspendisse interdum tellus ligula, quis imperdiet elit hendrerit non." 
        avatar={faker.image.avatar()} />
      </ApprovelCard>
      <ApprovelCard>
        <CommentDetail 
        author="Lola" 
        timeAgo="Yesterday at 9:30PM" 
        commentText="In eu neque pulvinar nisi gravida lobortis. Integer pretium sapien felis, eu viverra arcu semper sit amet. Donec consequat facilisis tempor." 
        avatar={faker.image.avatar()} />
      </ApprovelCard>
      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));