import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useTranslation } from 'react-i18next';
import styles from './View.module.css';
import ModalComponent from '../../../components/modal/Modal.component';
import InputComponent from '../../../components/input/Input.component';
import SelectComponent from '../../../components/select/Select.component';
import MultipleSelectComponent from '../../../components/multiple-select/MultipleSelect.component';

export type AddBdayState = {
  name: string,
  bday: string,
}

const View = () => {
  const { t: tModal } = useTranslation('translation', { keyPrefix: 'components.modal' });
  const { t: tInput } = useTranslation('translation', { keyPrefix: 'components.input' });

  const [isAddBirthDayModalClicked, setClicked] = useState<boolean>(false);
  const [addBdayState, setBdayState] = useState<AddBdayState>();

  return (
    <div className={styles.viewWrapper}>
      <span>
        <FullCalendar
          customButtons={{
            addBirthday: {
              text: tModal('add'),
              click: () => setClicked(!isAddBirthDayModalClicked),
            },
          }}
          headerToolbar={{
            left: 'prev,next today addBirthday',
            center: 'title',
            right: undefined,
          }}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height="80vh"
          editable
          selectable
          select={() => {
            setClicked(!isAddBirthDayModalClicked);
          }}
          events={[
            { title: 'event 1', date: '2024-04-01', display: 'list-item' },
          ]}
        />
        <ModalComponent
          isDisplayed={isAddBirthDayModalClicked}
          title="Add BirthDay"
          key="add-birthDay"
          onSubmit={() => {}}
          onCancel={() => setClicked(false)}
        >
          <div className={styles.inputWrapper}>
            <InputComponent type="text" name="text" label={tInput('name')} />
            <MultipleSelectComponent
              label="day"
              selects={[{
                options: [{
                  key: '1',
                  value: '1',
                }],
              }, {
                options: [{
                  key: '2',
                  value: '3',
                }],
              }, {
                options: [{
                  key: '2',
                  value: '3',
                }],
              }]}
              name="multiple-selects-birthday"
            />
          </div>
        </ModalComponent>
      </span>
    </div>
  );
};

export default View;
