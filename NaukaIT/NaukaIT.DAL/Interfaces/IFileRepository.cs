using NaukaIT.DAL.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.Interfaces
{
    public interface IFileRepository
    {
        byte[] Get(string group, string name, string rootPath);
        List<FileDTO> GetAll(string group, string rootPath);
    }
}
