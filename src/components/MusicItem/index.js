import {AiOutlineDelete} from 'react-icons/ai'

import {
  ListItem,
  SongContainer,
  SongContent,
  Image,
  NameAndGenre,
  Name,
  Genre,
  DurationAndDelete,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {musicDetails, onClickDeleteButton} = props
  const {id, imageUrl, name, genre, duration} = musicDetails

  const onClickDelete = () => onClickDeleteButton(id)

  return (
    <ListItem>
      <SongContainer>
        <SongContent>
          <Image src={imageUrl} alt="track" />
          <NameAndGenre>
            <Name>{name}</Name>
            <Genre>{genre}</Genre>
          </NameAndGenre>
        </SongContent>
        <DurationAndDelete>
          <Duration>{duration}</Duration>
          <DeleteButton
            type="button"
            data-testid="delete"
            onClick={onClickDelete}
          >
            <AiOutlineDelete size={25} />
          </DeleteButton>
        </DurationAndDelete>
      </SongContainer>
    </ListItem>
  )
}

export default MusicItem
