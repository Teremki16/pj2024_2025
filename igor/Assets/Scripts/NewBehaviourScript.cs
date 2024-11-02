using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    [SerializeField] GameObject platform;
    [SerializeField] int numberOfBlocks = 10;
    private Vector3 spavnPos = new Vector3();

    [SerializeField] float minX, maxX, minY, maxY;
    private Vector3 spawnPos = new Vector3();
    private void SpawnPlatform()
    {
        spavnPos.x = Random.Range(minX, maxX);
        spavnPos.y += Random.Range(minY, maxY);
        Instantiate(platform, spavnPos, Quaternion.identity);
    }
    private void Start()
    {
        for (int i = 0; i < numberOfBlocks; i++)
        {
            SpawnPlatform();
        }

    }

}
