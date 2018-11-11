using NaukaIT.DAL.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.Interfaces
{
    public interface IDocumentRepository
    {
        byte[] Get(string group, string name, string rootPath);
        List<DocumentDTO> GetAll(string group, string rootPath);
    }
}
