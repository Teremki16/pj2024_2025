using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HeartSpawner : MonoBehaviour
{
    [SerializeField] private GameObject heartPrefab;
    private Transform[] spawnPoints;

    private void Awake()
    {
        spawnPoints = gameObject.GetComponentsInChildren<Transform>();
    }
    private void Start()
    {
        InvokeRepeating("Spawn",1f, 2f);
    }
    private void Spawn()
    {
        int randomPosition = Random.Range(1, spawnPoints.Length);
        Instantiate(heartPrefab, spawnPoints[randomPosition].position, Quaternion.identity);   
    }
}
