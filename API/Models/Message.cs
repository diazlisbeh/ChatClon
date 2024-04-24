namespace API.Models;

public class Message
{
    public string Id { get; set; }
    public string? Content{ get; set; }
    public DateTimeOffset CreatedAt { get; set; }
    public bool IsUser { get; set; } = true;
    public User User { get; set; }
}