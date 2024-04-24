using API.Models;
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Linq;

namespace API.Repository;

public class Repository : IRepository
{
    private readonly Container _messagesCollections;
    // private readonly Container _itemsCollections;
    
    public Repository(CosmosClient client, IConfiguration configuration)
    {
        var database = client.GetDatabase(configuration["CosmosDb:databaseName"]);
        _messagesCollections = database.GetContainer("messages");
        // _itemsCollections = client.GetContainer("Chat", "Items");
    }
    
    public Task<IEnumerable<Message>> GetMessagesAsync()
    {
        return await _messagesCollections.G
    }

    public Task<Message> GetMessageAsync(string id)
    {
        throw new NotImplementedException();
    }

    public Task<Message> CreaseMessageAsync(Message message)
    {
        throw new NotImplementedException();
    }

    public Task<Message> UpdateMessageAsync(string id, Message message)
    {
        throw new NotImplementedException();
    }

    public Task<Message> DeleteMessageAsync(string id)
    {
        throw new NotImplementedException();
    }
}