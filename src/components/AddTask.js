import { useState } from 'react';
import { format } from 'date-fns';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (!text) {
      alert('Please add a task');
      return;
    } else {
      const Day = format(new Date(day), 'LLL do yyyy');
      onAdd({ text, Day, time, reminder });
      setText('');
      setDay('');
      setTime('');
      setReminder(false);
    }
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Date</label>
        <input type="date" value={day} onChange={e => setDay(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="">Time</label>
        <input
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={e => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
