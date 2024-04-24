using API.Models;

namespace API.Repository;

public interface IRepository
{
    public Task<IEnumerable<Message>> GetMessagesAsync();
    public Task<Message> GetMessageAsync(string id);
    public Task<Message> CreaseMessageAsync(Message message);
    public Task<Message> UpdateMessageAsync(string id, Message message);
    public Task<Message> DeleteMessageAsync(string id);
    
}