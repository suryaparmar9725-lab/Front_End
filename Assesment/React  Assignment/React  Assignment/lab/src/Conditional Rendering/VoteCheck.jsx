function VoteCheck({ age }) {
    return (
      <h3>
        {age >= 18
          ? "You are eligible to vote"
          : "You are not eligible to vote"}
      </h3>
    );
  }
  
  export default VoteCheck;
  